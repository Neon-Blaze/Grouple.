import LandingPageNavbar from "./_components/navbar";

type Props = {

} 

const landingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col container relative">

            <LandingPageNavbar></LandingPageNavbar>
            {children}
        </div>
    )
}

export default landingPageLayout;