import { Card, Heading, studioTheme, ThemeProvider } from "@sanity/ui";
import React from "react";

export const MyComponent = React.forwardRef((props, ref) => {
    return (
        <ThemeProvider theme={studioTheme}>
            <Card padding={4}>
                <Heading>Tailor Made</Heading>
            </Card>
        </ThemeProvider>
    );
});
export default MyComponent;
