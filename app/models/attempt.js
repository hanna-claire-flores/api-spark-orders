var mongoose = require("mongoose");

var attemptSchema = mongoose.Schema({
    timestampStarted: {
        type: Date,
        default: "1970",
        required: true,
    },
    timestampEnded: {
        type: Date,
        default: "1970",
        required: true,
    },
    location: {
        type: String,
        default: "",
        required: true,
    },
    printerName: {
        type: String,
        default: "",
        required: true,
    },
    printerID: {
        type: mongoose.Schema.ObjectId,
        default: null,
    },
    isFinished: {
        type: Boolean,
        default: false,
        required: true,
    },
    isSuccess: {
        type: Boolean,
        default: false,
        required: true,
    },
    isFailure: {
        type: Boolean,
        default: false,
        required: true,
    },
    rollID: {
        type: String,
        default: "",
        required: true,
    },
    startWeight: {
        type: Number,
        default: 0,
        required: true,
    },
    endWeight: {
        type: Number,
        default: 0,
        required: true,
    },
    startedBy: {
        type: String,
        default: "",
    },
    finishedBy: {
        type: String,
        default: "",
    },
    fileIDs: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                default: null,
            },
        ],
        default: [],
    },
    fileNames: {
        type: [{ type: String, default: "" }],
        default: [],
    },
});

module.exports = mongoose.model("Attempt", attemptSchema);
