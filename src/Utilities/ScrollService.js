import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";


export default class ScrollService{

    static scrollHandler = new ScrollService();

    static currentScreenBroadcaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("ContactMe")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }

    isElementInView = (elem, type)=> {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom;
        let completelyVisible = elementTop >=0 && elementBottom <= window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible
                default:
                    return false;
        }
    }

    checkCurrentScreenUnderViewPort = (event) => {
        if(!event || Object.keys(event).length < 1)
        return ;
        for(let sreen of TOTAL_SCREENS){
            let screenFromDom = document.getElementById(window.screen.screen_name);
            if(!screenFromDom)
            continue;


            let fullyVisible = this.isElementInView(screenFromDom, "complete");
            let partiallyVisible = this.isElementInView(screenFromDom, "partial")

            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !window.screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: window.screen.screen_name
                    });
                    sreen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: window.screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}
