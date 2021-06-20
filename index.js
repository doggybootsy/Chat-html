const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { React, getModule } = require('powercord/webpack');

const Toolbar = getModule(m=>m.default && m.default.displayName === "MiniPopover", false);

const Chat_html_btn = require("./Chat_html_btn.jsx")(Toolbar)
module.exports = class Chat_html extends Plugin {
    startPlugin() {
        if(Toolbar) inject("Chat html", Toolbar, "default", ([{children}], ret) => {
            if(!children || !Array.isArray(children) || children.slice(-1).length == 0) return ret;
            const { message } = children.slice(-1)[0].props;
            children.unshift(
                React.createElement(Chat_html_btn, {
                    onClick: () => document.querySelector('#chat-messages-'+message.id+' .markup-2BOw-j.messageContent-2qWWxC').innerHTML = document.querySelector('#chat-messages-'+message.id+' .markup-2BOw-j.messageContent-2qWWxC').innerText
                })
            )
            return ret;
        })
        Toolbar.default.displayName = "MiniPopover"
    }
    pluginWillUnload() {
        uninject("Chat_html");
    }
}