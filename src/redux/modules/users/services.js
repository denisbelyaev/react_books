import callApi from '../commonService'

export const addUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'POST',
        url: 'users',
        body: payload
    }

    return options;
}

export const getUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'POST',
        url: 'users',
        body: payload.user
    }

    return options;
}

export const updateUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'POST',
        url: 'users',
        body: payload.user
    }

    return options;
}

export const deleteUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'POST',
        url: 'users',
        body: payload.user
    }

    return options;
}

export const listUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'GET',
        url: '/books'
    }

    return options;
}