import { React } from "react"
import { useTab, useMultiStyleConfig } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/tabs"



export default function CustomTabs() {
    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='2'>
                    {isSelected ? '😎' : '😐'}
                </Box>
                {tabProps.children}
            </Button>
        )
    })

    return (
        <Tabs>
            <TabList>
                <CustomTab>One</CustomTab>
                <CustomTab>Two</CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
            </TabPanels>
        </Tabs>
    )
}