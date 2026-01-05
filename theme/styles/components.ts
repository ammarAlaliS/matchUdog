import { StyleSheet } from "react-native";
import { AppTheme } from "../themes";

export const createComponentStyles = (theme: AppTheme) => StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: theme.spacing.m,
    marginBottom: theme.spacing.xl,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
  },
  buttonText: {
    color: theme.colors.primaryForeground,
    fontWeight: theme.typography.fontWeights.medium as any,
  }
});
