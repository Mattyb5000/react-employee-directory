import axios from "axios";

export default {
    getEmployee: function() {
      return axios.get("https://randomuser.me/api/?seed=foobar&nat=us&inc=name,phone,email,dob,picture,gender,login&results=50");
    },
};