import { Fragment } from "react";
import { Route } from "react-router-dom";
import EnglishApp from "../../pages/en/App/EnApp";
import LoginPage from "../../pages/en/login/Login";
import Help from "../../pages/en/help/Help";
import ArabicApp from "../../pages/ar/ar_app/ArApp";
import LoginPageAr from "../../pages/ar/login/LoginAr";
import providingInformations from "../../pages/en/providing_information/ProvidingInformations";
import ProvidingInformationsAr from "../../pages/ar/providing_information/ProvidingInformationsAr";
import HelpAr from "../../pages/ar/help/HelpAr";
const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={EnglishApp} />
      <Route path="/login" component={LoginPage} />
      <Route path="/loginHelp" component={Help} />
      <Route path="/ar" component={ArabicApp} />
      <Route path="/ar-login" component={LoginPageAr} />
      <Route path="/rememberInformations" component={providingInformations} />
      <Route path="/ar-loginHelp" component={HelpAr} />
      <Route
        path="/ar-rememberInformations"
        component={ProvidingInformationsAr}
      />
    </Fragment>
  );
};
export default Routes;
