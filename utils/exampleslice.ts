<div className="col-md-6 mb-3">
                          <div className="form-group mt-3">
                            <RdsInput
                              size="small"
                              label=Name
                              placeholder="Enter name"
                              value={data.name}
                              onChange={(e) =>
                                setData((prevData) => ({ ...prevData, name: e.target.value }))
                              }
                              required={true}
                            ></RdsInput>
                          </div>
                        </div>

<div className="mb-2">
                          <RdsLabel label="Type" required={true}></RdsLabel>
                        </div>
                        <RdsSelectList
                          label={label}
                          selectedOption={data.selectedType}
                          selectItems={bookType}
                          onSelectListChange={selectHandler}
                        ></RdsSelectList>


                          <div className="mb-2">
                          <RdsLabel label="Publish Date" required={true}></RdsLabel>
                          </div>
                          <RdsDatePicker
                          type="default"
                          selectedDate={onDateChange}
                          dateForEdit={date}
                          onDatePicker={function (start: any, end?: any) {
                          return " ";
                          }}
                          ></RdsDatePicker>


<RdsInput
                          inputType=number
                          size="small"
                          label=Price
                          placeholder="Enter price"
                          value={data.price}
                          onChange={(e) =>
                            setData((prevData) => ({
                              ...prevData,
                              price: e.target.value,
                            }))
                          }
                          required={true}
                        ></RdsInput>