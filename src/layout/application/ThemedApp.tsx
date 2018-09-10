import * as React from 'react';
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from '../../components/navigation/TitleBar';
import MainContent from './MainContent';
import LeftDrawer from '../../components/navigation/LeftDrawer';
import { MuiThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from "../../theme/amherst";
import { ThemeType } from '../../store/ui/types';
import { ApplicationState } from "../../store";

interface Props {
  type: ThemeType
};

const ThemedApp: React.SFC<Props> = ({ type }) => {
  const theme = type == "dark" ? darkTheme : lightTheme;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <LeftDrawer />
      <main id="main">
        <TitleBar />
        <MainContent />
      </main>
    </MuiThemeProvider>
  )
};

const mapStateToProps = ({ ui }: ApplicationState): Props => ({ type: ui.theme });

export default connect(mapStateToProps)(ThemedApp);