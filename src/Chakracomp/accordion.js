import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs"
import COOK from '../assets/img/44.jpg'
import COOK2 from '../assets/img/5.jpg'
import ControlledExample from './tab'
import MyCarousel from '../carousel'

const ACCORDION = () => {
    return (
        <>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: 'lightblue', color: 'black' }}>
                            <Box as='span' flex='1' height={'40px'} textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon fontSize={'20px'} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'cyan', color: 'black' }}>
                                    <Box as='span' flex='1' height={'40px'} textAlign='left'>
                                        Section 2 title
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='20px' />
                                    ) : (
                                        <AddIcon fontSize='20px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion >
            <Box backgroundColor='tomato' />

            <Tabs defaultIndex={1} isLazy style={{ display: 'flex', justifyContent: 'space-beteen' }}>
                <MyCarousel />
                <Box style={{ width: '300px', height: '300px' }}>
                    <TabPanels>
                        <TabPanel>
                            <Image
                                boxSize='200px'
                                fit='cover'
                                src={COOK}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Image
                                boxSize='200px'
                                fit='cover'
                                src={COOK2}
                            />
                        </TabPanel>
                    </TabPanels>
                    <TabList>
                        <Tab>Cook1</Tab>
                        <Tab>Cook2</Tab>
                    </TabList>
                </Box>
                <ControlledExample />
            </Tabs>

        </>
    )
}

export default ACCORDION;