import { showLoading, hideLoading } from "src/utils";

const service = require("src/service/football").default;

export const getAreaList = async ({ commit }) => {
  try {
    showLoading();
    const res = await service.getAreaList();
    commit("setAreaList", res.areas);
    hideLoading();
    return res;
  } catch (err) {
    hideLoading();
    commit("setAreaList", []);
    throw err;
  }
};

export const getCompetitionList = async ({ commit }, request) => {
  try {
    showLoading();
    const res = await service.getCompetitionList(request);
    commit("setCompetitionList", res.competitions);
    hideLoading();
    return res;
  } catch (err) {
    hideLoading();
    commit("setCompetitionList", []);
    throw err;
  }
};

export const getTeamList = async ({ commit }, request) => {
  try {
    showLoading();
    const res = await service.getTeamList(request);
    commit("setCompetitionDetail", res.competition);
    commit("setTeamList", res.teams);
    hideLoading();
    return res;
  } catch (err) {
    hideLoading();
    commit("setTeamList", []);
    throw err;
  }
};

export const getTeamDetail = async ({ commit }, request) => {
  try {
    showLoading();
    const res = await service.getTeamDetail(request);
    commit("setPlayerList", res.squad);
    commit("setTeamDetail", res);
    hideLoading();
    return res;
  } catch (err) {
    hideLoading();
    commit("setPlayerList", []);
    throw err;
  }
};

export const getPlayerDetail = async ({ commit }, request) => {
  try {
    showLoading();
    const res = await service.getPlayerDetail(request);
    commit("setPlayerDetail", res);
    hideLoading();
    return res;
  } catch (err) {
    hideLoading();
    commit("setPlayerDetail", {});
    throw err;
  }
};

