import React from 'react';

class EmptyState extends React.Component {

    render() {
        const { title, subtitle, iconType } = this.props;
        let icon;

        switch(iconType) {
            case "playlist":
                icon = (<i className="spoticon-playlist-folder-32"></i>);
                break;
            case "discover":
                icon = (<i className="spoticon-discover-32"></i>);
                break;
            case "release":
                icon = (<i className="spoticon-released-32"></i>);
                break;
            case "chart":
                icon = (<i className="spoticon-chart-new-32"></i>);
                break;
            case "disc":
                icon = (<i className="spoticon-album-32"></i>);
                break;
            case "album":
                icon = (<i className="spoticon-album-contained-32"></i>);
                break;
            case "artist":
                icon = (<i className="spoticon-artist-32"></i>);
                break;
            case "podcast":
                icon = (<i className="spoticon-podcasts-32"></i>);
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