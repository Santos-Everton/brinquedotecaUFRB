export default function handleErrors(err, req, res, next) {
    const {status, message} = err;
    if(err) res.status(status || 500).send(message || "Internal server error");
    next()
}