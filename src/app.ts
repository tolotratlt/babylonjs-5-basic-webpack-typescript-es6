import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder , KeyboardEventTypes, StandardMaterial, Color3} from "@babylonjs/core";
import '../public/main.css';

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        const box = MeshBuilder.CreateBox("box", {height: 1 ,width: 1, depth: 1 }, scene);
        const boxMaterial = new StandardMaterial("boxMat", scene);
        boxMaterial.diffuseColor = new Color3(1, 0, 1);
        box.material = boxMaterial;
        box.position = new Vector3(-3, 1, -4);

        // hide/show the Inspector
        /*
        window.addEventListener("keydown", (ev) => {
            // Ctrl+I
            if (ev.ctrlKey && ev.key === 'i') {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });
         */

        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "i": {
                            if (scene.debugLayer.isVisible()) {
                                scene.debugLayer.hide();
                            } else {
                                scene.debugLayer.show();
                            }
                        }
                            break;
                        case "ArrowLeft":
                        case "a":
                            box.rotation = new Vector3(0, Math.PI / 2, 0);
                            break;
                        case "ArrowRight":
                        case "d":
                            box.rotation = new Vector3(0, Math.PI / 2, 0);
                            break;
                    }
                    break;
            }
        });


        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();