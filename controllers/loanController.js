const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getAllLoans =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoan = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    // Loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoan = async  (req, res) => {
  try {
    // const newLoan = new Loan({})
    // newLoan.save()

    const newLoan = await Loan.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newLoan
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    await Loan.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};