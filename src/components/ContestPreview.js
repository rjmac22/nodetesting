import React , { Component } from 'react';
import PropTypes from 'prop-types';


class ContestPreview extends Component {
  handdleClick = () => {
    this.props.onClick(this.props._id);
  };
  render() {
    return (
      <div className="link ContestPreview" onClick={this.handdleClick}>
        <div className="Category-name">
          {this.props.categoryName}
        </div>
        <div className="Contest-name">
          {this.props.contestName}
        </div>
      </div>

    );
  }
}

ContestPreview.propTypes = {
  _id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default ContestPreview;
