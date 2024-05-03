import { useState, React } from "react"
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs"



export default function ControlledExample() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }

    return (
        <Box>
            <input
                type='range'
                min='0'
                max='2'
                value={tabIndex}
                onChange={handleSliderChange}
            />

            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Click the tabs or pull the slider around</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Yeah yeah. What's up?</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}