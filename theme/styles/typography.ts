import { StyleSheet } from "react-native";
import { AppTheme } from "../themes";

export const createTypographyStyles = (theme: AppTheme) => StyleSheet.create({
  title: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.text,
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    fontSize: theme.typography.fontSizes.m,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  body: {
    fontSize: theme.typography.fontSizes.m,
    color: theme.colors.text,
  },
  caption: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSizes.s,
  }
});
