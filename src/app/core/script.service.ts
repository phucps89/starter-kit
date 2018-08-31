import {Injectable} from "@angular/core";

declare var document: any;

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  // {name: 'go_menu', src: '../../assets/go_menu/go_menu.js'},
  // {name: 'fe_scripts', src: '../../assets/juli/common-js/scripts.js'},
  // {name: 'admin_fastclick', src: '/node_modules/gentelella/vendors/fastclick/lib/fastclick.js'},
];

@Injectable()
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}
