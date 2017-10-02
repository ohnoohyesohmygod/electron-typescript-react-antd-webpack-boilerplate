import * as console from 'console'

const BGCOLOR_ATTR_NAME = "originalBGColor"

export class DOMInspector {

    public start() {
        console.log("dom inspector is start ... ")
        document.addEventListener("mouseover", this.handleMouseOver, true)
        document.addEventListener("mouseout", this.handleMouseOut, true)
        document.addEventListener("click", this.handleClick, true)
    }

    public stop() {
        document.removeEventListener("mouseover", this.handleMouseOver, true)
        document.removeEventListener("mouseout", this.handleMouseOut, true)
        document.removeEventListener("click", this.handleClick, true)

        const nodes = document.querySelectorAll("[" + BGCOLOR_ATTR_NAME + "]")
        nodes.forEach((value: Element, idx: number, listObj: NodeListOf<Element>) => {
            value.removeAttribute(BGCOLOR_ATTR_NAME)
        })
    }

    private handleMouseOver(e: Event) {
        const element = e.srcElement as HTMLElement

        const bgColor = element.style.backgroundColor
        if (bgColor != null) {
            const attr = document.createAttribute(BGCOLOR_ATTR_NAME)
            attr.value = bgColor
            element.attributes.setNamedItem(attr)
        }
        element.style.backgroundColor = "#C0C0C0"
    }

    private handleMouseOut(e: Event) {
        const element = e.srcElement as HTMLElement
        const bgColor = element.getAttribute(BGCOLOR_ATTR_NAME)
        if (bgColor != undefined && bgColor != null) {
            element.style.backgroundColor = bgColor
        } else {
            element.style.backgroundColor = ""
        }
    }
    
    private handleClick(e: Event) {
        stop()
        
        const element = e.srcElement as HTMLElement
        console.log(element.innerHTML)
        console.log("\n\n\n")
    }
}
