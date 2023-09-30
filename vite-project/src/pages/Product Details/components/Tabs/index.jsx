import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';

export default function LabTabs({item,setItem,tabs}) {
  const [value, setValue] = React.useState(item);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setItem(newValue)
  };

  console.log(value);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              tabs.map((tab,index)=>{
                return <Tab label={tab.name} value={index+1} onClick={()=>console.log(index+1)}/>
              })
            }
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
