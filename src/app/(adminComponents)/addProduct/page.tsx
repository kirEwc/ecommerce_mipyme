"use client";

import { validationAddProduct } from "@/app/validation/validationAddProduct";
import CustomSelectProductCategory from "@/components/my-components/CustomSelectProductCategory/CustomSelectProductCategory";
import { dataProduct } from "@/components/my-components/CustomSelectProductCategory/DataProduct";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import ImageInput from "@/components/Next_ui_elements/inputImage/InputImage";
import InputNumberNext from "@/components/Next_ui_elements/inputNumber/InputNumberNext";
import InputText from "@/components/Next_ui_elements/inputText/InputText";
import { F7MoneyDollar, FluentCalendarCancel20Filled, IconParkOutlineAdProduct, MaterialSymbolsBoxAddRounded, TablerBrandLoom } from "@/icons/Icons";
import CorrectMessage from "@/messages/CorrectMessage";
import ErrorMessage from "@/messages/ErrorMessage";
import ApiRequest from "@/services/ApiRequest";
import { Textarea } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
    const router = useRouter();
    const [characteristics, setCharacteristics] = useState("");
    // Agregar viñetas cuando el textarea reciba el foco
    const handleFocus = () => {
        if (!characteristics.startsWith("•")) {
            setCharacteristics("• " + characteristics); // Prepend bullet point if not already present
        }
    };

    // Manejar el evento de tecla presionada (especialmente Enter)
    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar el salto de línea por defecto
            setCharacteristics((prev) => prev + "\n• "); // Añadir nueva línea con viñeta
        }
    };

    // Función para manejar el cambio de texto
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharacteristics(event.target.value);
    };


    const handleAddProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log('handleAddProduct');
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const productData = {
            name: String(formData.get('name')),
            brand: String(formData.get('brand')),
            description: String(formData.get('description')),
            characteristics: String(formData.get('characteristics') || ''),
            money: parseFloat(formData.get('money') as string) || 0,
            category: String(formData.get('category')),
            profilePicture: formData.get('profilePicture'),
        };

        // Validación
        const validatedFields = validationAddProduct.safeParse(productData);

        if (!validatedFields.success) {
            const firstError = validatedFields.error.errors[0];
            const messageError = String(firstError.message);

            console.log(messageError);
            ErrorMessage(messageError);
        } else {
            try {
                const response = await ApiRequest({
                    method: 'POST',
                    url: 'https://your-api-endpoint.com/api/products',
                    body: productData,
                });

                if (response.status === 200) {
                    CorrectMessage('Producto agregado correctamente');                    
                } else {
                    ErrorMessage('Error al agregar el producto');
                }

            } catch (error) {
                console.log(error);
                ErrorMessage('Error al procesar la solicitud');
            }
        }
    };




    return (
        <div className="h-screen w-screen bg-[url('/images/fondo/adminPanel.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full mx-2">
                <div className="bg-white rounded-md shadow-md opacity-90 w-full  max-w-full sm:max-w-md lg:max-w-lg  ">
                    <header className="relative bg-gradient-to-br from-blue-700 to-purple-500 p-4 rounded-md text-center overflow-hidden before:absolute before:w-32 before:h-32 before:bg-pink-400 before:rounded-full before:blur-2xl before:-top-4 before:-left-4 after:absolute after:w-24 after:h-24 after:bg-yellow-300 after:rounded-full after:blur-2xl after:-bottom-4 after:-right-4">
                        <h1 className="text-3xl font-bold text-white">Agregar Producto</h1>
                    </header>

                    <div >
                        <form className="p-2" onSubmit={handleAddProduct}>
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

                                <div className="mt-6">
                                    <ImageInput
                                        name="profilePicture"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                console.log("Imagen seleccionada:", file);
                                            }
                                        }}
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
                                <label htmlFor="characteristics" className="text-sm font-bold block mb-2 text-blue-500">Características:</label>
                                <Textarea
                                    name="characteristics"
                                    id="characteristics"
                                    className="w-full rounded-lg border-2 border-blue-500"
                                    value={characteristics}
                                    onFocus={handleFocus}
                                    onChange={(e) => handleChange(e as unknown as React.ChangeEvent<HTMLTextAreaElement>)} // Convert to unknown first
                                    onKeyDown={(e) => handleKeyPress(e as unknown as React.KeyboardEvent<HTMLTextAreaElement>)} // Convert to unknown first
                                    rows={6}
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

                                <div className="mt-2 w-52">
                                    <label htmlFor="characteristics" className="text-sm font-bold block mb-2  text-blue-500">Selecionar Producto:</label>
                                    <CustomSelectProductCategory
                                        categories={dataProduct}
                                        selectedLabel="Tecnología"
                                        onSelect={(category) => console.log('Categoría seleccionada:', category)}
                                    />

                                </div>
                            </div>

                            <footer className="mt-2">
                                <div className="flex justify-between p-2">
                                    <ButtonNext
                                        onClick={() => router.push('/adminPanel')}
                                        icon={<FluentCalendarCancel20Filled />}
                                        text="Cancelar"
                                        className="bg-red-500 text-white"
                                    />

                                    <ButtonNext
                                        type="submit"
                                        icon={<MaterialSymbolsBoxAddRounded />}
                                        text="Agregar"
                                        className="bg-green-500 text-white"
                                    />
                                </div>
                            </footer>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default AddProduct;
