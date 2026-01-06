import { StyleSheet } from "react-native";
import { AppTheme } from "../themes";

export const createTypographyStyles = (theme: AppTheme) => StyleSheet.create({
  h3: {
    fontSize: theme.typography.fontSizes.xxl,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.text,
  },
  h2: {
    fontSize: theme.typography.fontSizes.xxxl,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.text,
  },
  h1: {
    fontSize: theme.typography.fontSizes.xxxxl,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.text,
  },
  sub: {
    fontSize: theme.typography.fontSizes.m,
    color: theme.colors.textSecondary,
  },
  subLg: {
    fontSize: theme.typography.fontSizes.xl,
    color: theme.colors.textSecondary,
  },
  body: {
    fontSize: theme.typography.fontSizes.m,
    color: theme.colors.text,
  },
  caption: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSizes.s,
  },
  label: {
    fontSize: theme.typography.fontSizes.m,
    color: theme.colors.text,
    fontWeight: theme.typography.fontWeights.medium as any,
  }
});
