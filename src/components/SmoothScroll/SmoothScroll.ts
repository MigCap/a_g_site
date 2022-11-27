/* eslint-disable @typescript-eslint/no-explicit-any */
export const smoothScroll = {
    timer: null,

    stop: function() {
        clearTimeout(this.timer as any)
    },

    scrollTo: function(id: string, callback?: () => void) {
        const settings = {
            duration: 2000,
            easing: {
                outQuint: function(
                    x: any,
                    t: number,
                    b: number,
                    c: number,
                    d: number,
                ) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
                },
            },
        }
        const startTime = Date.now()
        let percentage = 0
        const node = document.getElementById(id)
        const nodeTop: any = node?.offsetTop
        const nodeHeight: any = node?.offsetHeight
        const body = document.body
        const html = document.documentElement
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight,
        )
        const windowHeight = window.innerHeight
        const offset = window.pageYOffset
        const delta = nodeTop - offset
        const bottomScrollableY = height - windowHeight
        const targetY =
            bottomScrollableY < delta
                ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
                : delta

        if (this.timer) {
            clearInterval(this.timer)
        }

        function step(this: any) {
            let yScroll
            const elapsed = Date.now() - startTime

            if (elapsed > settings.duration) {
                clearTimeout(this.timer)
            }

            percentage = elapsed / settings.duration

            if (percentage > 1) {
                clearTimeout(this.timer)

                if (callback) {
                    callback()
                }
            } else {
                yScroll = settings.easing.outQuint(
                    0,
                    elapsed,
                    offset,
                    targetY,
                    settings.duration,
                )
                window.scrollTo(0, yScroll)
                this.timer = setTimeout(step, 10)
            }
        }

        this.timer = setTimeout(step, 10) as any
    },
}
