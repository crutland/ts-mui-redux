import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { openDrawer } from "../../store/ui/actions";
import { ApplicationState } from "../../store";

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface PropsFromState {
  title: string
};
interface PropsFromDispatch {
  openDrawer: typeof openDrawer
}
type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>


const TitleBar = withStyles(styles)(
  ({ openDrawer, classes, title }: Props) => {
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={5}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={openDrawer} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>{title}</Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
);

const mapStateToProps = ({ ui }: ApplicationState): PropsFromState => ({
  title: ui.title ? ui.title : "No Title"
});
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  openDrawer: () => dispatch(openDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);

