import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render if image array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imagesList = ["/vite.png", "/nextjs.png"];
    render(<ProductImageGallery imageUrls={imagesList} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imagesList.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
