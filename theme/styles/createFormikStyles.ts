import { StyleSheet } from "react-native";
import { AppTheme } from "../themes";

export const createFormikStyles = (theme: AppTheme) => StyleSheet.create({
    container: {
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.s,
        position: 'relative',
        marginBottom: theme.spacing.s,
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
        marginTop: 4,
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
        marginTop: 4,
    },
    text: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 16,
        color: theme.colors.text,
    },
    text_password: {
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 16,
        color: theme.colors.text,
    },
    buttom: {
        color: '#FFF'
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: -4,
        right: theme.spacing.m,
        backgroundColor: theme.colors.whiteOpacity,
        paddingHorizontal: theme.spacing.s,
        paddingVertical: 3,
        borderRadius: theme.borderRadius.full,
        borderWidth: 1,
        borderColor: theme.colors.error,
        gap: 4,
        zIndex: 10,
    },
    errorText: {
        color: theme.colors.text,
        fontSize: 12,
        fontWeight: '400',
    }

});