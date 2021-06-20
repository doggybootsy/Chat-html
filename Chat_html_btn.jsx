const { React, getModuleByDisplayName } = require("powercord/webpack");
const Tooltip = getModuleByDisplayName("Tooltip", false);
module.exports = (({Button, Separator}) => class Chat_html_btn extends React.Component {
    render() {
        if(!Button || !Separator) return null;
        return (<div>
            <Tooltip color="black" postion="top" text={"Load Html"}>
                {({onMouseLeave, onMouseEnter}) => (
                <Button onClick={this.props.onClick.bind(this)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <svg width="24px" height="24px" style={{position: "relative", top: "-2px", right: "1px", overflow: "visible"}} className="icon-3Gkjwa">
                        <path fill="currentColor" d="M20.999,2h-18l2,18l7,2l7-2L20.999,2z M16.825,8.083H9.169l0.182,2.179h7.29l-0.547,6.439l-4.093,1.302l-0.04-0.013	L7.914,16.7l-0.221-2.624h1.982l0.087,1.019l2.261,0.498l2.221-0.499l0.236-2.755H7.544L7.007,6h9.996L16.825,8.083z"></path>
                    </svg>
                </Button>
                )}
            </Tooltip>
            <Separator />
        </div>)
    }
})
