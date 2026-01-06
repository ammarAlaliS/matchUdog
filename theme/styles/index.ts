import { AppTheme } from "../themes";
import { createComponentStyles } from "./components";
import { createFormikStyles } from "./createFormikStyles";
import { createLayoutStyles } from "./layout";
import { createTypographyStyles } from "./typography";

export const createAppStyles = (theme: AppTheme) => ({
  layout: createLayoutStyles(theme),
  typography: createTypographyStyles(theme),
  components: createComponentStyles(theme),
  formik: createFormikStyles(theme),
});
