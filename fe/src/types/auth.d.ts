declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};


declare type SignUpParams = {
    username: string;
    email: string;
    password: string;
};

declare type LoginUser = {
    email: string;
    password: string;
};


