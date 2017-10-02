import React, { Component, PropTypes }  from 'react';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyHeader:false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var el = document.querySelector('.pageHeader');
    var pageY = window.scrollY;
    if (pageY !== 0 && el.getBoundingClientRect().bottom > 100) {
      console.log(el.getBoundingClientRect().bottom + 'bottom');
      this.setState({stickyHeader:true});
    } else if (pageY === 0) {
      console.log('top');
      this.setState({stickyHeader:false});
    }
  }
  render() {
    if (this.state.stickyHeader) {
      var stickyClass = {
        top: '0.000em'
      };
    }
    return (
      <div className="container-fluid pageHeader" style={stickyClass}>
        <div className="row">
          <div className="col-xs-6">
            <div className="page-title text-left">{this.props.pageTitle}</div>
          </div>
          <div className="col-xs-6">
            <button type="button" role="button" className="primary-btn pull-right">
              Save Form
            </button>
          </div>
        </div>
      </div>
    );
  }
}
PageHeader.PropTypes = {
    pageTitle:PropTypes.string,
}
PageHeader.defaultProps = {
    pageTitle:`CaseName`,   
}

export default PageHeader;
