import Head from "next/head"
import { Provider, useDispatch, useSelector } from "react-redux"
import { setButtonClicked } from "../state/reducers/app"
import store, { RootState } from "../state/store"
import WindowListener from "../utils/WindowListener"

const Homepage = () => (
    <>
    <Head>
        <title>{process.env.RESOURCE_NAME}</title>
    </Head>
    <Provider store={store}>
        <WindowListener>

                <HomepageContent />
        </WindowListener>
    </Provider>
    </>
)

const HomepageContent = () => { // TO AVOID https://i.imgur.com/798mUI4.png (FOR DEMO PUPOSES ONLY)
    const dispatch = useDispatch()

    const buttonClicked = useSelector((state: RootState) => state.app.buttonClicked)

    return (
        <div className="flex flex-col justify-center items-center gap-5 w-screen h-screen">
            <h1 className="text-5xl font-bold">HOME PAGE</h1>
            <button className="daisy-btn daisy-btn-primary" onClick={() => dispatch(setButtonClicked(true))}>CLICK ME</button>
            {buttonClicked && <h1 className="text-5xl font-bold">BUTTON CLICKED</h1>}
        </div>
    )
}

export default Homepage