import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import Navbar from '../Navbar/Navbar'
import InnerNav from '../InnerNav/InnerNav';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TabsPricingExample() {
  const Navigate = useNavigate();

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };
  
  return (
    <>
      <Navbar />
      <Tabs
        size="sm"
        aria-label="Pricing plan"
        defaultValue={0}
        sx={(theme) => ({
          width: '100%',
          '--Tabs-gap': '0px',
          borderRadius: 'lg',
          boxShadow: 'sm',
          overflow: 'auto',
          border: `1px solid ${theme.vars.palette.divider}`,
        })}
      >
        <TabList
          sx={{
            '--List-item-radius': '0px',
            borderRadius: 0,
            [`& .${tabClasses.root}`]: {
              fontWeight: 'lg',
              flex: 1,
              bgcolor: 'background.body',
              position: 'relative',
              [`&.${tabClasses.selected}`]: {
                color: 'primary.500',
              },
              [`&.${tabClasses.selected}:before`]: {
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: -1,
                width: '100%',
                height: 2,
                bgcolor: 'primary.400',
              },
              [`&.${tabClasses.focusVisible}`]: {
                outlineOffset: '-3px',
              },
            },
          }}
        >
          <Tab sx={{ py: 1.5 }}>Community</Tab>
          <Tab>Pro</Tab>
          <Tab>Premium</Tab>
        </TabList>
        <TabPanel value={0} sx={{ p: 3, textAlign:'center', m:2 }}>
          <Typography level="inherit">
            Get started with community. Enjoy free meditation at zero cost.
          </Typography>
          <Typography textColor="success.400" fontSize="xl3" fontWeight="xl" my={1}>
            $0{' '}
            <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
              － Free forever
            </Typography>
          </Typography>
          <Box textAlign='center'>
          <Button onClick={()=>Navigate('/')} sx={{ m: 3 }} variant="contained">Explore Now</Button>
          </Box>'
        </TabPanel>
        <TabPanel value={1} sx={{ p: 3, textAlign:'center', m:2 }}>
          <Typography level="inherit">
          Get started with breathly pro and enjoy lots of more features of meditation.
          </Typography>
          <Typography sx={{m:3}} textColor="primary.400" fontSize="xl3" fontWeight="xl" my={1}>
            $15{' '}
            <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
              / month
            </Typography>

          </Typography>
          <Box textAlign='center'>
          <Button sx={{ m: 2 }} variant="contained">Buy Pro</Button>
          </Box>
        </TabPanel>
        <TabPanel value={2} sx={{ p: 3, textAlign:'center', m:2 }}>
          <Typography level="inherit">
           Get started with breathly premium & enjoy the most advanced features of meditation, as well as the
            highest priority for support.
          </Typography>
          <Typography textColor="primary.400" fontSize="xl3" fontWeight="xl" my={1}>
            <Typography
              fontSize="xl"
              borderRadius="sm"
              px={0.5}
              mr={0.5}
              sx={(theme) => ({
                ...theme.variants.soft.danger,
                color: 'danger.400',
                verticalAlign: 'text-top',
                textDecoration: 'line-through',
                m: 2
              })}
            >
              {/* $49 */}
            </Typography>
            $25{' '}
            <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
              / month
            </Typography>
          </Typography>
          <Box textAlign='center'>
          <Button sx={{ m: 3 }} variant="contained">Buy Premium</Button>
          </Box>'
        </TabPanel>
      </Tabs>
 
      <InnerNav />
    </>
  );
}