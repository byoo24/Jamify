import React from 'react';

class EmptyState extends React.Component {

    render() {
        const { title, subtitle, iconType } = this.props;
        let icon;

        switch(iconType) {
            case "disc":
                icon = (<i className="fas fa-compact-disc"></i>);
                break;
            case "archive":
                icon = (<i className="fas fa-archive"></i>);
                break;
            case "astronaut":
                icon = (<i className="fas fa-user-astronaut"></i>);
                break;
            case "podcast":
                icon = (<i className="fas fa-podcast"></i>);
                break;
            default:
                icon = null;
        }

        return (
            <div className="empty-state">
                <div className="empty-state-container">
                    <div className="empty-state-icon">
                        {icon}
                    </div>
                    <h1 className="empty-state-title">
                        { title ? title : null }
                    </h1>
                    <h4 className="empty-state-subtitle">
                        { subtitle ? subtitle : null }
                    </h4>
                </div>
            </div>
        )
    }
}


export default EmptyState;