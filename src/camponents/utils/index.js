import axios from 'axios'
export default function EmployeeList() {
    return axios.get("https://randomuser.me/api/?results=30")
        
      
  }