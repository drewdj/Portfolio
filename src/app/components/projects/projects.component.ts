import { Component } from '@angular/core';
import {Project} from "../../models/project";

import {PROJECTS} from "./project-data";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
  selectedProject: Project = this.projects[0];
  test: string = "assets/images/PlumVR/plumvr1.jpg";

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
