import React from 'react';
import { Drawer as MUIDrawer, ListItem, ListItemIcon, ListItemText, List, makeStyles, Button} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';

const useStyles = makeStyles({
  list:{
    width: 250,
  },
  fullList:{
    width:'auto'
  }
})

const Drawer = () => {
  const classes = useStyles();
  const [items, setItems] = React.useState({
    right: false
  })
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setItems({ ...items, [anchor]: open });
  };

  const list = (anchor) =>{
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
        <MUIDrawer>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </MUIDrawer> 
      </div>
  }

    return(
         <div>
           {['right'].map((anchor) => (
             <React.Fragment key={anchor}>
             <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
             <Drawer anchor={anchor} open={items[anchor]} onClose={toggleDrawer(anchor, false)}>
               {list(anchor)}
             </Drawer>
           </React.Fragment>
           ))}
         </div>
    )
}

export default Drawer;