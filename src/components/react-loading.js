import './style.scss'
export default class extends React.PureComponent {
  state = {};
  static defaultProps = {
    text: 'Loading...'
  };


  render() {
    const {text, animating} = this.props;
    if (animating) {
      return (
        <div className="react-loading">
          <div className="react-loading-content">
            <div className="react-loading-hd"/>
            {
              text && <div className="react-loading-bd">{text}</div>
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
