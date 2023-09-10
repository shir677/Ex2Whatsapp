const port = 12345


export const addUser = async (regUser) => {
    const res = await fetch("http://localhost:"+port+"/api/Users", {
        'method': 'post', // send a post request
        'headers': {
            'Content-Type': 'application/json' // the data (username/password) is in the form of a JSON object
        },
        'body': JSON.stringify(regUser) // The actual data (username/password)
    });
    return res;
};

export const getToken = async (LoginUser) => {
    try {
        const res = await fetch("http://localhost:"+port+"/api/Tokens", {
            'method': 'post',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(LoginUser)
        });
        return res;
    } catch (error) {
        throw new Error('Failed to fetchgetToken');   
    }
    
};

export const getUser = async (id, token) => {
    //   console.log("the token is in handle: " + token);
    try {
        const res = await fetch("http://localhost:"+port+"/api/Users/" + id, {
            'method': 'get',
            'headers': {
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + token // attach the token
            }
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error('Failed to fetch user information');
        }
    } catch (error) {
        console.error('Failed to fetch user information (catch): ', error);
        throw error;
    }
};

export const getChats = async (token) => {
    try {
        const res = await fetch("http://localhost:"+port+"/api/Chats", {
            'method': 'get',
            'headers': {
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + token // attach the token
            }
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error('Failed to fetch user chats');
        }
    } catch (error) {
        console.error('Failed to fetch user chats (catch): ' + error);
        throw error;
    }
};

export const deleteChats = async (id,token) => {
    try {
        const res = await fetch("http://localhost:"+port+"/api/Chats/" + id, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + token // attach the token
            }
        });
        console.log(res)
        if (res.ok) {
            return res;
        } else {
            throw new Error('Failed to delete user chats');
        }
    } catch (error) {
        console.error('Failed to delete user chats (catch): ' + error + id);
        throw error;
    }
};

export const addChat = async (newContact, token) => {
    try {
        const res = await fetch("http://localhost:"+port+"/api/Chats", {
            'method': 'post', // send a post request
            'headers': {
                'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
                'authorization': 'bearer ' + token // attach the token
            },
            'body': JSON.stringify(newContact)
        });

        if (res.ok) {
            const data = await res.json();
            console.log("data", data)
            return data;
        } else {
            throw new Error('Failed to add user');
        }
    } catch (error) {
        console.error('Failed to add user (catch): ' + error);
        throw error;
    }
};


export const addMessage = async (Message, id, token) => {
    try {
    const res = await fetch("http://localhost:"+port+"/api/Chats/" + id + "/Messages", {
        'method': 'post', // send a post request
        'headers': {
            'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
            'authorization': 'bearer ' + token // attach the token
        },
        'body': JSON.stringify(Message) // The actual data (username/password)
    });
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('Failed to fetch chat messages');
    }
    }catch (error) {
        console.error('Failed to fetch chat messages:', error);
        throw error;
    }
};

export const getChatMessages = async (id, token) => {
    try {
        const res = await fetch("http://localhost:"+port+"/api/Chats/" + id + "/Messages", {
            'method': 'get',
            'headers': {
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + token // attach the token
            }
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error('Failed to fetch chat messages');
        }
    } catch (error) {
        console.error('Failed to fetch chat messages:', error);
        throw error;
    }
};