import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sticky-top position-fixed" style={{ display: 'flex', height: '100vh', paddingLeft:"45px"}} id="sticky-sidebar">
      <CDBSidebar textColor="#FFFFFF" backgroundColor="#353353"   breakpoint={720} >
      <CDBSidebarHeader>
            <NavLink exact to="/HomeScreen" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{paddingBottom:"50px",color:"#E0E0E5"}}>AUR</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content p" >
          <CDBSidebarMenu textColor="#FFFFFF" backgroundColor="#272C33">
            <NavLink exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" style={{paddingTop:"30px"}}>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Services" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Services</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Experience" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Experience</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Works" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Works</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Blogs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Blogs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Contact" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user-plus">Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{paddingTop:"5rem", paddingLeft:"2rem",paddingBottom:"4rem"}}>
            <i className="fa fa-copyright" />
            Akash's Portfolio 2023.
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;