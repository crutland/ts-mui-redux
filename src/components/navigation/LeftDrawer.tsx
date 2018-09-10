import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { openDrawer, closeDrawer, toggleTheme } from "../../store/ui/actions";
import { ApplicationState } from "../../store";
import { ThemeType } from "../../store/ui/types";


interface ItemListProps {
  isDarkTheme: boolean,
  toggleTheme: typeof toggleTheme
};

const ItemList: React.SFC<ItemListProps> = ({ isDarkTheme, toggleTheme }) => {
  let icon = isDarkTheme ? <CheckBoxIcon /> : <CheckBoxOutlineIcon />;
  return (
    <div>
      <ListItem button onClick={toggleTheme}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary="Use Dark Theme" />
      </ListItem>
    </div>
  )
}

const styles = createStyles({
  list: { width: 250 }
});

interface PropsFromState {
  leftDrawerOpen: boolean;
  themeType: ThemeType
};

interface PropsFromDispatch {
  openDrawer: typeof openDrawer,
  closeDrawer: typeof closeDrawer,
  toggleTheme: typeof toggleTheme
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>

const LeftDrawer = withStyles(styles)(
  (props: Props) => {
    return (
      <SwipeableDrawer open={props.leftDrawerOpen} onClose={props.closeDrawer} onOpen={props.openDrawer}>
        <div tabIndex={0} role="button" onClick={props.closeDrawer}>
          <div className={props.classes.list}>
            <List>
              <ItemList isDarkTheme={props.themeType === "dark"} toggleTheme={props.toggleTheme} />
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    )
  }
);

const mapStateToProps = ({ ui }: ApplicationState): PropsFromState => ({
  leftDrawerOpen: ui.leftDrawerOpen,
  themeType: ui.theme
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);