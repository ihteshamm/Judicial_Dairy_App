const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')
require('./review')
require('./case')
require('./CaseRequest')
require('./Lawyer')

app.use(bodyParser.json())

const Client = mongoose.model("users")
const Lawyer = mongoose.model("lawyers")
const Reviews = mongoose.model("reviews")
const Cases = mongoose.model("cases")
const CaseRequest = mongoose.model("CaseRequests")

const mongoUri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
    console.log("connected to mongo on port 4000")
})
mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get('/get', (req, res) => {
    Client.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})
app.get('/getLawyer', (req, res) => {
    Lawyer.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.post('/send-dataClient', (req, res) => {
    // Client.findOne({ email: req.body.email })
    //     .then(user => {
    //         if (user) {
    //             Alert.alert(`Email exists`)
    //             return res.status(400).json(errors);
    //         } else {
    //             Client.findOne({ name: req.body.name })
    //                 .then(user => {
    //                     if (user) {
    //                         Alert.alert(`Username exists`)
    //                         return res.status(400).json(errors);
    //                     } else {
    //                         Client.findOne({ contact: req.body.contact })
    //                             .then(user => {
    //                                 if (user) {
    //                                     Alert.alert(`Phone No. exists`)
    //                                     return res.status(400).json(errors);
    //                                 } else {

    const clients = new Client({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        gender: req.body.gender,
        address: req.body.address,
        password: req.body.password,
    })
    clients.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })

    //                             }
    //                         });
    //                 }
    //             });

    //     }
    // });
});
app.post('/send-dataLawyer', (req, res) => {
    // Client.findOne({ email: req.body.email })
    //     .then(user => {
    //         if (user) {
    //             Alert.alert(`Email exists`)
    //             return res.status(400).json(errors);
    //         } else {
    //             Client.findOne({ name: req.body.name })
    //                 .then(user => {
    //                     if (user) {
    //                         Alert.alert(`Username exists`)
    //                         return res.status(400).json(errors);
    //                     } else {
    //                         Client.findOne({ contact: req.body.contact })
    //                             .then(user => {
    //                                 if (user) {
    //                                     Alert.alert(`Phone No. exists`)
    //                                     return res.status(400).json(errors);
    //                                 } else {

    const lawyers = new Lawyer({
        name: req.body.name,
        type: req.body.type,
        fee: req.body.fee,
        email: req.body.email,
        address: req.body.address,
        contact: req.body.contact,
        gender: req.body.gender,
        court: req.body.court,
        experiance: req.body.experiance,
        password: req.body.password,
    })
    lawyers.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })

    //                             }
    //                         });
    //                 }
    //             });

    //     }
    // });
});

app.post('/delete', (req, res) => {
    Employee.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

app.post('/update', (req, res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        password: req.body.password,
        types: req.body.types
    }).then(data => {
        console.log(data)
        res.send(data)
    })
        .catch(err => {
            console.log(err)
        })
})
//----------------//
//----Reviews-----//
//----------------//
app.post('/send-Review', (req, res) => {
    const review = new Reviews({
        name: req.body.name,
        email: req.body.email,
        lawyer: req.body.lawyer,
        entertext: req.body.entertext,
        ratings: req.body.ratings,
    })
    review.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})

//----------------//
//-----Cases------//
//----------------//
app.post('/send-Case/:_id', (req, res) => {
    const cases = new Cases({
        title: req.body.title,
        type: req.body.type,
        code: req.body.code,
        client: req.body.client,
        lawyer: req.body.lawyer,
        court: req.body.court,
        hearingDate: req.body.hearingDate,
        description: req.body.description,
        status: req.body.status,
    })
    cases.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})
//---------------Send Case Request------------//
app.get('/get-Cases/:lawyer', (req, res) => {
    Cases.findById({ lawyer: req.params.lawyer }).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})
//---------------Lawyer's Cases------------//
app.get(`/getcases/:name`, async (req, res) => {
    const name = req.params.name;
    const cases = await Cases.find({ lawyer: name })
    if (!cases) {
        res.status(500).json({ success: false })
    }
    res.send(cases);
})
//---------------Lawyer's Cases------------//
app.get(`/getreviews/:name`, async (req, res) => {
    const name = req.params.name;
    const cases = await Reviews.find({ lawyer: name })
    if (!cases) {
        res.status(500).json({ success: false })
    }
    res.send(cases);
})
//---------------Client's Cases------------//
app.get(`/getClientCases/:name`, async (req, res) => {
    const name = req.params.name;
    const cases = await Cases.find({ client: name })
    if (!cases) {
        res.status(500).json({ success: false })
    }
    res.send(cases);
})
app.get('/getMyRequests/:name', async (req, res) => {
    const name = req.params.name;
    const cases = await CaseRequest.find({ client: name })
    if (!cases) {
        res.status(500).json({ success: false })
    }
    res.send(cases);
})
//------total lawyer's list from database-------------//
app.get(`/GetLawyerList/`, async (req, res) => {
    const List = await Lawyer.find()
    if (!List) {
        res.status(500).json({ success: false })
    }
    res.send(List);
})

//---------------------total cases Count-------------------//
app.get(`/totalCases/:name`, async (req, res) => {
    const name = req.params.name;
    const CaseCount = await Cases.find({ lawyer: name }).count()

    if (!CaseCount) {
        res.status(500).json({ success: false })
    }
    res.send({
        CaseCount
    });
})
//---------------------total cases Count-------------------//
app.get(`/ReviewsCount/:name`, async (req, res) => {
    const name = req.params.name;
    const ReviewCount = await Reviews.find({ lawyer: name }).count()

    if (!ReviewCount) {
        res.status(500).json({ success: false })
    }
    res.send({
        ReviewCount
    });
})
//---------------------total cases Count-------------------//
app.get(`/LawyersCount/`, async (req, res) => {
    const LawyerCount = await Lawyer.find({ }).count()

    if (!LawyerCount) {
        res.status(500).json({ success: false })
    }
    res.send({
        LawyerCount
    });
})
//---------------------total cases Count-------------------//
app.get(`/ClientsCount/`, async (req, res) => {
    const ClientCount = await Client.find({ }).count()
    if (!ClientCount) {
        res.status(500).json({ success: false })
    }
    res.send({
        ClientCount
    });
})

//---------------------New Requests-------------------//
app.get(`/newRequests/:name`, async (req, res) => {
    const name = req.params.name;
    const Requests = await CaseRequest.find({ lawyer: name,status:"pending" }).count()

    if (!Requests) {
        res.status(500).json({ success: false })
    }
    res.send({
         Requests
    });
})
//---------------Send Case Request------------//
app.post('/send-CaseRequest', (req, res) => {
    const requestcase = new CaseRequest({
        client: req.body.client,
        type: req.body.type,
        lawyer: req.body.lawyer,
        description: req.body.description,
        status: req.body.status,
    })
    requestcase.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})
//---------------Get Case Request------------//
app.get(`/getcasesRequestLawyer/:lawyer`, async (req, res) => {
    const lawyer = req.params.lawyer;
    const Requests = await CaseRequest.find({ lawyer: lawyer, status: "pending" })
    if (!Requests) {
        res.status(500).json({ success: false })
    }
    res.send(Requests);
})

app.put(`/deleteRequest/:id`, async (req, res) => {
    const cases = await CaseRequest.findByIdAndUpdate(req.params.id,
        {
            status: "Rejected",
        },
        {
            new: true, // for return updated data
        }
    );
    if (!cases) {
        return res.status(400).send('The Case cannot be created!');
    }
    res.send(cases);
});

//------------------Accept Case Request--------//  
app.put(`/AcceptCaseRequest/:id`, async (req, res) => {
    const cases = await CaseRequest.findByIdAndUpdate(req.params.id,
        {
            status: "Accepted",
        },
        {
            new: true, // for return updated data
        }
    );
    if (!cases) {
        return res.status(400).send('The Case cannot be created!');
    }
    res.send(cases);
});

//---------------------total Request Count-------------------//
app.get(`/totalRequests/:name`, async (req, res) => {
    const name = req.params.name;
    const RequestCount = await CaseRequest.find({ name: name }).count()

    if (!RequestCount) {
        res.status(500).json({ success: false })
    }
    res.send({
        RequestCount
    });
})

//---------------Get Rejected Cases------------//
app.get(`/Rejected_Request_Message/:name`, async (req, res) => {
    const name = req.params.name;
    const status = "Case Rejected";
    const Requests = await Chat.find({ client: name, status: status })
    if (!Requests) {
        res.status(500).json({ success: false })
    }
    res.send(Requests);
})
app.delete(`/deleteRequest_Notification/:name`, async (req, res) => {
    await Chat.findOneAndDelete({
        client: req.params.name,
        status: "Case Rejected"
    }).then(request => {
        if (request) {
            return res.status(200).json({ new: true, message: 'the request is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: "request not found!" })
        }
    }).catch(err => {
        console.log("Error!");
        return res.status(500).json({ success: false, error: err })
    })
})

app.disable('etag');
//--------------------------------------------------------------------//
app.listen(4000, () => {
    console.log("server running")
})
