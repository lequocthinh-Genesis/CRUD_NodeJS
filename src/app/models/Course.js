const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');




const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    // createAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },


}, {
    timestamps: true,
});

// custom query helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }

    return this;
}


// add plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', CourseSchema);