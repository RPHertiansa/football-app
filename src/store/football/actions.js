const service = require("src/service/football").default;

export const getAreaList = async ({ commit }) => {
  try {
    const res = await service.getAreaList();
    commit("setAreaList", res.areas);
    return res;
  } catch (err) {
    commit("setAreaList", []);
    throw err;
  }
};

export const getCompetitionList = async ({ commit }, request) => {
  try {
    const res = await service.getCompetitionList(request);
    commit("setCompetitionList", res.competitions);
    return res;
  } catch (err) {
    commit("setCompetitionList", []);
    throw err;
  }
};

export const getTeamList = async ({ commit }, request) => {
  try {
    const res = await service.getTeamList(request);
    commit("setTeamList", res.teams);
    return res;
  } catch (err) {
    commit("setTeamList", []);
    throw err;
  }
};

export const getTeamDetail = async ({ commit }, request) => {
  try {
    const res = await service.getTeamDetail(request);
    commit("setPlayerList", res.squad);
    return res;
  } catch (err) {
    commit("setPlayerList", []);
    throw err;
  }
};

export const getPlayerDetail = async ({ commit }, request) => {
  try {
    const res = await service.getPlayerDetail(request);
    commit("setPlayerDetail", res);
    return res;
  } catch (err) {
    commit("setPlayerDetail", {});
    throw err;
  }
};

