const Fetchuser = (INITIAL_STATE =[], action) =>
{
    switch(action.type)
    {
        case "FETCH-USER":
            return [...INITIAL_STATE,action.payload]
            default:
                return INITIAL_STATE;
    }

};

export default Fetchuser;