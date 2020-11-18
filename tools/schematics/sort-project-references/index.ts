import { chain, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';
import { formatFiles } from '@nrwl/workspace';

export default function (schema: any): Rule {
  return chain([
    incrementVersion(),
    sortWorkspaceJsonProjects(),
    sortNxJsonProjects(),
    formatFiles()
  ]);
}

function incrementVersion(): Rule {
  return updateJsonInTree('workspace.json', (json) => {
    json.version++;
    return json;
  });
}

function sortWorkspaceJsonProjects(): Rule {
  return updateJsonInTree('workspace.json', (json) => {
    return sortProjectsJson(json);
  });
}

function sortNxJsonProjects(): Rule {
  return updateJsonInTree('nx.json', (json) => {
    return sortProjectsJson(json);
  });
}

function sortProjectsJson(json: any) {
  const {projects} = json;
  const sortedProjects = sortObjectKeys(projects);
  json.projects = sortedProjects;
  return json;
}

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj).sort().forEach(key => {
    sorted[key] = obj[key];
  });
  return sorted;
}
