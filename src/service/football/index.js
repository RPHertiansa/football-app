import axios from "axios";

const url = "http://localhost:8081/https://api.football-data.org/v4";
const config = {
  "X-Auth-Token": "edcf56dcfad344a6afb33cd2de3f459a",
  "content-type": "application/x-www-form-urlencoded;charset=utf-8",
};
export default {
  getAreaList: async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/areas`,
        headers: config
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getCompetitionList: async (request) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/competitions?areas=${request}`,
        headers: config
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getTeamList: async (request) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/competitions/${request}/teams`,
        headers: config
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getTeamDetail: async (request) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/teams/${request}`,
        headers: config
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getPlayerDetail: async (request) => {
    try {
      const res = await axios({
        method: "get",
        url: `${url}/persons/${request}`,
        headers: config
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
