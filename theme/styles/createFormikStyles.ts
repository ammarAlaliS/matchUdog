import { StyleSheet } from "react-native";
import { AppTheme } from "../themes";

export const createFormikStyles = (theme: AppTheme) => StyleSheet.create({
     container: {
 
    },

    input: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.s,
    },
    inputError: {
        width: '100%',
        paddingVertical: theme.spacing.m,
        borderWidth: 1,
        borderColor: theme.colors.error,
        backgroundColor: theme.colors.dangerOpacity,
        borderRadius: theme.borderRadius.m,
        gap: theme.spacing.m,
        fontSize: theme.typography.fontSizes.m,
        fontFamily: theme.typography.fontWeights.regular,
        color: theme.colors.text,
        paddingLeft: theme.spacing.s,
        paddingRight: theme.spacing.m,
    },
    username: {
        width: '100%',
        paddingLeft: theme.spacing.s,
        paddingRight: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.whiteOpacity,
        borderRadius: theme.borderRadius.m,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.m,
        fontSize: theme.typography.fontSizes.m,
        fontFamily: theme.typography.fontWeights.regular,
        color: theme.colors.text,
    },
    text: {
        fontFamily: 'PlusJakartaSans-Regular',
        color: 'blue',
        fontSize: 16
    },
    text_password: {
        fontFamily: 'PlusJakartaSans-Regular',
        color: 'blue',
        fontSize: 16
    },
    buttom: {
        color: '#FFF'
    },
    error: {
        color: 'red',
        fontSize: 12,
    }
});