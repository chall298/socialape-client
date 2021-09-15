import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../util/MyButton';
import LikeButton from './LikeButton';
import Comments from './Comments';
import CommentForm from './CommentForm';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI Stuff
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';
// Redux stuff
import { connect } from 'react-redux';
import { getScream, clearErrors } from '../redux/actions/dataActions';

const styles = (theme) => ({
  ...theme.spreadThis,
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  dialogContent: {
    padding: 20
  },
  closeButton: {
    position: 'absolute',
    left: '90%'
  },
  expandButton: {
    position: 'absolute',
    left: '90%'
  },
  spinnerDiv: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  }
});

class ScreamDialog extends Component {
    state = {
        open: false
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
}

ScreamDialog.propTypes = {
    clearErrors: PropTypes.func.isRequired,
    getScream: PropTypes.func.isRequired,
    screamId: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    scream: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    scream: state.data.scream,
    UI: state.UI
  });
  
  const mapActionsToProps = {
    getScream,
    clearErrors
  };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(ScreamDialog));