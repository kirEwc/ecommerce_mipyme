"use client";

import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import InputNumberNext from "@/components/Next_ui_elements/inputNumber/InputNumberNext";
import InputText from "@/components/Next_ui_elements/inputText/InputText";
import { F7MoneyDollar, FluentCalendarCancel20Filled, IconParkOutlineAdProduct, MaterialSymbolsBoxAddRounded, TablerBrandLoom } from "@/icons/Icons";
import { Textarea } from "@nextui-org/input";

const AddProduct = () => {
    return (
        <div className="h-screen w-screen bg-[url('/images/fondo/adminPanel.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full mx-2">
            <div className="bg-white rounded-md shadow-md opacity-90 w-full  max-w-full sm:max-w-md lg:max-w-lg  ">                
                    <header className="bg-gradient-to-br from-blue-700 to-purple-500 p-4 rounded-md text-center">
                        <h1 className="text-3xl font-bold text-white  ">Agregar Producto</h1>
                    </header>

                    <div >
                        <form className="p-2">

                            <div className="flex items-center justify-between space-x-2">
                                <div className="w-52">
                                    <label htmlFor="name" className="text-sm font-bold  text-blue-500">Nombre del Producto:</label>
                                    <InputText
                                        icon={<IconParkOutlineAdProduct />}
                                        id="name"
                                        name="name"
                                        className="w-full rounded-lg border-2 border-blue-500"
                                    />
                                </div>
                                <div className="w-52">
                                    <label htmlFor="brand" className="text-sm font-bold text-blue-500">Marca:</label>
                                    <InputText
                                        icon={<TablerBrandLoom />}
                                        id="brand"
                                        name="brand"
                                        className="w-full rounded-lg border-2 border-blue-500"
                                    />
                                </div>

                            </div>

                            <div className="mt-2 ">
                                <label htmlFor="description" className="text-sm font-bold block mb-2  text-blue-500">Descripción:</label>
                                <Textarea
                                    name="description"
                                    id="description"
                                    className="w-full rounded-lg border-2 border-blue-500"
                                />

                            </div>
                            <div className="mt-2">
                                <label htmlFor="characteristics" className="text-sm font-bold block mb-2  text-blue-500">Características:</label>
                                <Textarea
                                    name="characteristics"
                                    id="characteristics"
                                    className="w-full rounded-lg border-2 border-blue-500"
                                />
                            </div>


                            <div className="flex items-center justify-between space-x-2">

                                <div className="mt-2 w-52">
                                    <label htmlFor="money" className="text-sm font-bold block mb-2  text-blue-500">Precio:</label>
                                    <InputNumberNext
                                        name="money"
                                        id="money"
                                        placeholder=""
                                        icon={<F7MoneyDollar />}
                                        className="w-full rounded-lg border-2 border-blue-500"
                                    />
                                </div>

                               <div className="mt-8 w-48 text-end">
                                    <p className="text-lg sm:text-xl font-bold block mb-2 bg-gradient-to-r  from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-serif">
                                    Tropical Market
                                    </p>
                                </div>

                            </div>
                        </form>
                    </div>

                    <footer>
                        <div className="flex justify-between p-2">
                            <ButtonNext
                                icon={<FluentCalendarCancel20Filled />}
                                text="Cancelar"
                                className="bg-red-500 text-white"

                            />

                            <ButtonNext
                                icon={<MaterialSymbolsBoxAddRounded/>}
                                text="Agregar"
                                className="bg-green-500 text-white"
                            />
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
