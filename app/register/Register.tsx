import {Button, Card, Checkbox, Input, Typography} from "@/app/Components/MaterialTailwindExporter";

const RegistrationForm = () => {
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" crossOrigin={'auto'}/>
                    <Input size="lg" label="Email" crossOrigin={'auto'}/>
                    <Input type="password" size="lg" label="Password" crossOrigin={'auto'}/>
                </div>
                <Checkbox
                    label={<Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        I agree the
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                        >
                            &nbsp;Terms and Conditions
                        </a>
                    </Typography>}
                    containerProps={{className: "-ml-2.5"}} crossOrigin={'auto'}/>
                <Button className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}

export default RegistrationForm;